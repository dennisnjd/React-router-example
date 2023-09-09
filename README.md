Referal videos for Understand routing :

1. https://youtu.be/H67AsjovIwk?feature=shared
2. https://youtu.be/63IKfpAgo7Y?feature=shared
3. https://youtu.be/YE-pMb7hvg8?feature=shared


   Steps


   1). Create Pages folder in src and add pages
   
   2). Create PageRouter.js file in src and
   
       import {createBrowserRouter } from "react-router-dom";
   
       import other pages in thi file.

      Then refer the router.js file in this project.

   3). When Bootstrap is there ,

             import {Nav ,Navbar, NavItem} from 'react-bootstrap';
      then refer PageNavbar.jsx file in the Components folder of this project.


   4). When No bootstrap ,

       import { Link } from 'react-router-dom';
     Then Wrap the component in  <Link to='/routeName'> </Link>
     Refer Profile.jsx in the pages folder.

      example "
