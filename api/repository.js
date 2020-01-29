export default $axios => resource => ({
  get(header, id) {
    // additional header settings
    if (id) {
      return $axios.$get(`${resource}/${id}`);
    }
    return $axios.$get(resource);
  },

  post(payload, header) {
    return $axios.$post(resource, payload);
  },

  put(payload, id, header) {
    return $axios.$put(`${resource}/${id}`, payload);
  },

  delete(id, header) {
    return $axios.$delete(`${resource}/${id}`);
  }
});
