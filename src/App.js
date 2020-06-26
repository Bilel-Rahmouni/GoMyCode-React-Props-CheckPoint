import React, { Component } from "react";
import "./App.css";
import User from "./profile/components/Profile";
import Myimage from "./profile/img.jpg";
const user = {
  fullName: "Bilel Rahmouni",
  bio:
    "Bilel Rahmouni(/aɪnstaɪn/ EYEN-styne4 German [albɛʁt ʔaɪnʃtaɪn] (listen) 14 March 1879 18 April 1955) was a Germanborn theoretical physicist5 who developed the theory of relativity one of the two pillars of modern physics alongside quantum mechanics His work is also known for its influence on the philosophy of science He is best known to the general public for his massenergy equivalence formula E = mc2 which has been dubbed   the worlds most famous equation.[9] He received the 1921 Nobel Prize in Physics for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect,[10] a pivotal step in the development of quantum theory.",
  profession: "Team leader",
  image: Myimage,
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <User x={user} />
      </div>
    );
  }
}
export default App;
