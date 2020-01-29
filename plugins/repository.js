import createRepository from '~/api/repository.js';

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios);
  const repositories = {
    albums: repositoryWithAxios('/albums')
  };
  console.log(repositories);
  inject('repositories', repositories);
};
