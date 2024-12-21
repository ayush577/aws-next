module.exports = {
  apps: [
    {
      script: "npm run start",
    },
  ],

  deploy: {
    production: {
      key: "key.pem",
      user: "ubuntu",
      host: "54.208.48.94",
      ref: "origin/main",
      repo: "git@github.com:ayush577/aws-next.git",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      "ssh_options": "ForwardAgent=yes",
    },
  },
};
