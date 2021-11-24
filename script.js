SetEnvIf Request_URI "(/apple-touch-icon\.png)$" allow
Order allow,deny
Allow from env=allow
Satisfy any