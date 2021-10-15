import React, { Component } from "react";
// import { Message } from "./Message.js";
// import { ActionButton } from "./ActionButton.js";
// import { ThemeSelector } from "./ThemeSelector.js";
import { GeneralList } from "./GeneralList";
import { SortedList } from "./SortedList";
import { ProFeature } from "./ProFeature";
// import { ProControler} from "./ProControler";
// import { LogToConsole } from "./LogToConsole";

// const ProList = ProControler(LogToConsole(SortedList, "Sorted",true, true,true));
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // counter: 0,
      // reverseChildren: false,
      names: ["Zosia", "Kuba", "Ala", "Ola", "Jaś"],
      cities: ["London", "Paris", "Berlin", "Zurich", "Rome"],
      proMode: false,
    };
  }
  toggleProMode = () => {
    this.setState({
      proMode: !this.state.proMode,
    });
  };
  // incrementCounter = () => {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // };

  render() {
    return (
      <>
        {/* <div className="m-2 text-center">
          <ThemeSelector>
          <Message
            theme="primary"
            message={`Licznik: ${this.state.counter}`}
          ></Message>
          <ActionButton
            theme="secondary"
            text="Increment"
            callback={this.incrementCounter}
          ></ActionButton>
          </ThemeSelector> */}
        {/* </div> */}
        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <GeneralList list={this.state.names} theme="primary"></GeneralList>
            </div>
            <div className="col-6">
              <SortedList list={this.state.names}></SortedList>
            </div>
          </div>
        </div> */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center p-2">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={this.state.proMode}
                  onChange={this.toggleProMode}
                />
                <label className="form-check-label">Tryb dla speców</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <GeneralList
                list={this.state.names}
                theme="primary"
              ></GeneralList>
            </div>
            <div className="col-6">
              <ProFeature pro={this.state.proMode} render={() => <SortedList list={this.state.names}></SortedList>}></ProFeature>
            </div>
            {/* <div className="col-3">
              <ProList
                list={this.state.names}
              ></ProList>
            </div>
            <div className="col-3">
              <SortedList
                list={this.state.cities}
                theme="secondary"
              ></SortedList>
            </div>
            <div className="col-3">
              <ProList
                list={this.state.cities}
              ></ProList>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}
