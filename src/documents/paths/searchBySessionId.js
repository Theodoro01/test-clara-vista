export default {
  '/v1/navigationsession': {
    get: {
      tags: ['Search By Session_Id'],
      description: '',
      parameters: [
        {
          in: 'query',
          name: 'path',
          required: true
        }
      ],
      responses: {
        200: { description: 'OK' }
      }
    }
  }
}
