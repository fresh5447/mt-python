// import React from 'react';
// import { browserHistory } from 'react-router';
// import $ from 'jquery';
//
// class UserLogout extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//   }
//   componentWillMount() {
//     this.context.getUser((data) => {
//       if(data){
//         this.signout(data)
//       }
//     })
//
//   }
//   signout(user){
//     $.ajax({
//       url: '/logout',
//       data: user,
//       method: 'POST',
//       success: ((data) => {
//         this.context.sendNotification(data.message);
//         browserHistory.push('/');
//       }),
//       error: ((err) => {
//         this.context.sendNotification(err.responseText);
//       })
//     })
//   }
//   render() {
//     return (
//       <div className="user-screen-container">
//         <div className="container">
//           <div className="row">
//             <h3>CodeRange</h3>
//             <p>Logging Out</p>
//           </div>
//
//         </div>
//       </div>
//
//     );
//   }
// }
//
// UserLogout.contextTypes = {
//   sendNotification: React.PropTypes.func.isRequired,
//   getUser: React.PropTypes.func.isRequired
// };
//
// export default UserLogout;
