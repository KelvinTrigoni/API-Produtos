import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    // List of files to be processed.
    apis: ['./routers.js'],
    // You can also set globs for your apis
    // e.g. './routes/*.js'
    basePath: '/',
    swaggerDefinition: {
      info: {
        description: 'API que faz um CRUD no firebase (database realtime)',
        swagger: '2.0',
        title: 'Produtos API',
        version: '1.0.0',
      },
    },
  };
  const specs = swaggerJsdoc(options);
  export default specs;