 #!/bin/bash

#Updating and upgrading
sudo apt update && sudo apt upgrade -y

#Installing and configuring NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
#Load NVM
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

#installing node
nvm install 18
nvm use 18
nvm alias default 18
node -v
npm -v

#Create React App
npx create-react-app react-admin

#Install material and nivo 
npm install @mui/material @emotion/react @emotion/styled @mui/x-data-grid @mui/icons-material react-router-dom@6 react-pro-sidebar formik yup @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list @nivo/core @nivo/pie @nivo/bar @nivo/geo

cd react-admin
cd src
rm -rf setupTests.js
rm -rf App.test.js
rm -rf reportWebVitals.js
rm logo.svg
rm -rf App.css


