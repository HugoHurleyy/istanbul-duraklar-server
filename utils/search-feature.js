import slugify from 'slugify';

class APIFeatures {
  constructor(query, queryObj) {
    this.queryObj = queryObj;
    this.query = query;
  }

  filter() {
    const queryParams = { ...this.queryObj };

    const excludedFields = ['fields', 'sort', 'search'];

    excludedFields.forEach((field) => delete queryParams[field]);

    const formattedSearch = slugify(this?.queryObj?.search || '');

    this.query = this.query.find({
      ...queryParams,
      searchQuery: { $regex: formattedSearch },
    });

    return this;
  }

  limitFields() {
    if (this.queryObj.fields) {
      const fields = this.queryObj.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  sort() {
    if (this.queryObj.sort) {
      const sort = this.queryObj.sort.split(',').join(' ');
      this.query = this.query.sort(sort);
    }
    return this;
  }
}

export default APIFeatures;
