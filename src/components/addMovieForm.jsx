import React, {Component} from "react";


class AddMovie extends Component {
    render() { 
        return ( 
            <div>
            <h1>Add Movie</h1>
            <form >
               <div className="mb-3">
                   <label className="form-label">Id</label>
                   <input type="text" className="form-control"/>
               </div>
               <div className="mb-3">
                   <label className="form-label">Adult</label>
                   <input type="text" className="form-control"/>
               </div>
               <div className="mb-3">
                   <label className="form-label">Belongs To collection</label>
                   <input type="text" className="form-control"/>
               </div>
               <div className="mb-3">
                   <label className="form-label">Budget</label>
                   <input type="text" className="form-control"/>
               </div>
               <div className="mb-3">
                   <label className="form-label">Title</label>
                   <input type="text" className="form-control"/>
               </div>
               <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
         );
    }
}
 
export default AddMovie;