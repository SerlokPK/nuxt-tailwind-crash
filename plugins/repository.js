import createRepository from '~/api/repository.js';

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios);
  const repositories = {
    album: repositoryWithAxios('/albums')
  };
  inject('repo', repositories);
};
