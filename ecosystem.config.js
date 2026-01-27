module.exports = {
  apps: [
    {
      name: 'bebidas-ancestrales',
      script: 'npm',
      args: 'start',
      cwd: '/home/usuario/app_bebidas_ancestrales', // Cambiar por tu ruta
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
    },
  ],
};

