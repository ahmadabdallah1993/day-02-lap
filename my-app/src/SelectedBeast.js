import React from "react";
import HornedBeast from "./HornedBeast";


class SelectedBeast extends React.Component {

    constructor(props){
        super(props);

        this.state = {
          numOfClick : 0
        }
      }

        dis = () => {
          this.setState({
          
          })
          this.props.carde();
        }
    

    render(){
        return(
          
          
          
          
          // <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          //   <div class="modal-dialog" role="document">
          //     <div class="modal-content">
          //       <div class="modal-header">
          //         <h5 class="modal-title" id="exampleModalLongTitle">card title: </h5>
          //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          //           <span aria-hidden="true">&times;</span>
          //         </button>
          //       </div>
          //       <div class="modal-body">
          //         helloooo
          //       </div>
          //       <div class="modal-footer">
          //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          //         <button type="button" class="btn btn-primary">Save changes</button>
          //       </div>
          //     </div>
          //   </div>
          // </div>


          

<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times; press</span>
  </button>
</div>

          


        )
    }
}

export default SelectedBeast;


