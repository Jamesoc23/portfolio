import boto3
import io
import zipfile
import mimetypes

def lambda_handler(event, context):
    
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:039741258094:deploy_portfolio')
    try:
        
        s3 = boto3.resource('s3')
        portfolio_bucket = s3.Bucket('joconnor.io')
        build_bucket = s3.Bucket('build.joconnor.io')
        
        portfolio_zip = io.BytesIO()
        build_bucket.download_fileobj('portfolio_build.zip', portfolio_zip)
        
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, 
                    ExtraArgs={
                        'ContentType': mimetypes.guess_type(nm)[0]
                    })
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
                
        topic.publish(Subject="Portfolio Deployment", Message="Deployment Successful!")
    except:
        topic.publish(Subject="Portfolio Deployment", Message="Deployment Unsuccessful :(")