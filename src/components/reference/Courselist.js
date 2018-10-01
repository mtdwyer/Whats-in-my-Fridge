import React, { Component } from 'react';
import Grid from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import * as contenful from 'contentful';

import Course from './Course';

const SPACE_ID = '[Insert Contentful Space Id]';
const ACCESS_TOKEN = '[Insert Contenful Access Token]';

const client = contenful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

class Courselist extends Component {
  state = {
    courses: [],
    searchString: ''
  };

  constructor() {
    super();
    this.getCourses();
  }

  getCourses = () => {
    client
      .getEntries({
        content_type: 'course',
        query: this.state.searchString
      })
      .then(response => {
        this.setState({ courses: response.items });
        console.log(this.state.courses);
      })
      .catch(error => {
        console.log('Error occured while fetching entries');
        console.log(error);
      });
  };

  onSearchInputChange = event => {
    console.log('Search changed ...' + event.target.value);
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: '' });
    }
    this.getCourses();
  };

  render() {
    return (
      <div>
        {this.state.courses ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search for Courses"
              margin="normal"
              onChange={this.onSearchInputChnage}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.courses.map(currentCourse => {
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Course course={currentCourse} />
                </Grid>;
              })}
            </Grid>
          </div>
        ) : (
          'No courses found'
        )}
      </div>
    );
  }
}

export default Courselist;
