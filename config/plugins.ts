// config/plugins.ts
export default ({ env }: { env: any }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-local',
    },
  },
});
