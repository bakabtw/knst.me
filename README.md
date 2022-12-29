# Purpose
This is the source code for my homepage (https://knst.me)

# Installation
 Copy the code
 ```
 git clone https://github.com/bakabtw/knst.me
 cd knst.me/
 ```

Install dependencies
```
npm install
```

# Running
Test environment
```
npm start dev
```

Production
```
npm run build
```

# Running in Docker
Building docker image
```
docker build -t knst.me .
```

Running docker image
```
docker run -p 80:80 knst.me
```

Alternatively, you can pull a docker image from DockerHub
```
docker run -p 80:80 bakabtw/homepage
```

# Examples
You can checkout the live demo here: https://knst.me/