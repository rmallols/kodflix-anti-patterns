![Kodflix](./kodflix.png?raw=true "Title")

# Kodflix - Kodiri's sample app :)

## Prerequirements
1. [Create a GitHub account](https://github.com)
2. [Install git](https://git-scm.com/downloads)
3. [Install node](https://nodejs.org/en/download/)
4. [Install Visual Studio](https://code.visualstudio.com/download)

<details>
  <summary>Details</summary>
  <ul>
    <li><b>GitHub</b>: This is where</li>
  </ul>
</details>

## Setup

### Install app locally
```
npm install -g create-react-app
create-react-app kodflix
cd kodflix
npm start
```
[Bonus reading: About the "React app"](https://github.com/facebook/create-react-app)

### [Create a GitHub repo](https://github.com/new)

### Grant your laptop access to your GitHub repo

1. Open a GitBash shell. This is usually located, on Windows, at `C:\Program Files (x86)\Git\bin\sh.exe`
2. Run the following command:
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
Then press `Enter` on every question you get asked

3. Copy your just-created public key, located, on Windows, at `C:\users\<your_user>\.ssh\id_rsa.pub`
4. Paste the key into your GitHub account: `Profile -> Settings -> SSH and GPG keys -> New SSH key`

### Upload app to GitHub
```
git init
git remote add origin git@github.com:<your_gitHub_user>/kodflix.git
git add .
git commit -m "First commit"
git push -u origin master
```
![Kodflix](./commit-push.png?raw=true "commit-push")

## Adding changes
1. Change something :) (e.g. on `src/App.js`)
2. Open the source control panel (`View -> Open View -> Source Control`)
3. Set a message describing your changes
4. "Commit" the changes (`... -> Commit All`)
5. "Push" the changes, to get them saved on Github (`... -> Push`)