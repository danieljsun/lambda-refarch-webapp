// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "14on1qm17aobhkkeopu6f7c8qo",     // CognitoClientID
  "api_base_url": "https://nzcehe7rkb.execute-api.ap-southeast-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-lambda-refarch-webapp.auth.ap-southeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d189vhjiqloxzn.amplifyapp.com"                                      // AmplifyURL
};

export default config;
