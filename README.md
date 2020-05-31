# Burger Application
<p>Burger App is builded based on ReactJs.</p>
<p>With Burger App, we can build our delicious burger and order it!</p>
<p>Go to this URL to build you Burger! </p>
<p>http://namnguyen.burgerapp.s3-website-ap-southeast-1.amazonaws.com/</p>
<br/>
<p>Desktop View</p>

![](/img/desktop.png)

<br/>
<p>Mobile View</p>

![](/img/mobile.png)

<br/>

<p><b>Limitation</b>: This application is not intergrated with backend yet.</p>

<h2>We can run on Local or deploy it Server(S3 static host). I will guide you how to do that!</h2>

<h5>***Run on Local***</h5>
<p>Just pull the codes. Go to <b>burgerapp</b> folder and run <b>npm start</b> </p>

<h5>***Deploy to Server(AWS S3 static host)***</h5>
<p>We need to follow these steps below to deploy our web app to server</p>
<ul>
  <li>Install AWS CLI and setup your Configure Profile</li>
  <li>Create S3 bucket and update bucket policy to use our bucket as static host. <p>You can follow this doc : https://docs.amazonaws.cn/en_us/AmazonS3/latest/user-guide/static-website-hosting.html</p></li>
  <li>Open <b>package.json</b> in burgerapp folder.
    <p>Update your bucket name and aws configure profile</p>

         "scripts": {
            "start": "node scripts/start.js",
            "build": "node scripts/build.js",
            "test": "node scripts/test.js",
            "deploy" : "aws s3 sync build/ s3://YOUR_BUCKET_NAME --profile YOUR_PROFILE_NAME --region YOUR_BUCKET_REGION"
          }

    
  </li>
  <li>Build our app by : <b>npm run build</b></li>
  <li>Deploy our app by : <b>npm run deploy</b></li>
</ul>
