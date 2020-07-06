import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
import Result from "../result/Result.jsx";
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      amount: 20,
      apiURL: "https://pixabay.com/api/",
      apiKEY: "15334986-4bf7ccc96b9b19246d79d48cf",
      images: [],
    };
  }

  handlerSearch = (e) => {
    const val = e.target.value;
    this.setState({ searchText: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiURL}/?key=${this.state.apiKEY}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then((res) => this.setState({ images: res.data.hits }))
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  handlerSearchField = (e, index, value) => {
    this.setState({ amount: value });
  };

  handlerChange = (e) => {
    this.setState({ searchText: e.target.value });
  };
  render() {
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.handlerSearch}
          // onChange={this.handlerchange}
          floatingLabelText="Search For Images.."
          fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="Number Of Images"
          value={this.state.amount}
          onChange={this.handlerSearchField}
        >
          <MenuItem value={10} primaryText="5"></MenuItem>
          <MenuItem value={15} primaryText="15"></MenuItem>
          <MenuItem value={20} primaryText="20"></MenuItem>
          <MenuItem value={30} primaryText="30"></MenuItem>
          <MenuItem value={50} primaryText="50"></MenuItem>
        </SelectField>
        <br />
        {this.state.images.length > 0 ? (
          <Result images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
