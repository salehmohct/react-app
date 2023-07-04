import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../Redux TLK/Reducers/FilteredProduct";

const useDataFetch = (variable) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(variable));
  }, [dispatch, variable]);
};

// export default useDataFetch;
// To create an API request with variables using Redux Toolkit, you can utilize the createAsyncThunk function provided by Redux Toolkit. Here's a step-by-step guide:

// Set up Redux Toolkit in your React application: Install the necessary dependencies (@reduxjs/toolkit, react-redux, etc.), and create your Redux store using the configureStore function. Refer to the Redux Toolkit documentation for detailed instructions on setting up Redux Toolkit in a React application.

// Define an async thunk to make the API request: Use the createAsyncThunk function to define an async thunk that will handle the API request. This function should return a Promise that resolves with the API response. The thunk will automatically dispatch the appropriate actions based on the Promise's state (pending, fulfilled, or rejected).

// javascript
// Copy code
// // slice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchData = createAsyncThunk(
//   'data/fetch',
//   async (variable) => {
//     const response = await fetch(`your-api-endpoint/${variable}`);
//     const data = await response.json();
//     return data;
//   }
// );

// const dataSlice = createSlice({
//   name: 'data',
//   initialState: {
//     data: null,
//     error: null,
//     status: 'idle',
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default dataSlice.reducer;
// Connect your component to Redux: Use the useSelector and useDispatch hooks from react-redux to connect your component to the Redux store. Access the fetched data and dispatch the fetchData async thunk.

// javascript
// Copy code
// // MyComponent.js
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchData } from './slice';

// const MyComponent = () => {
//   const { data, error, status } = useSelector((state) => state.data);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchData('your-variable-value'));
//   }, []);

//   // Rest of the component logic here

//   return (
//     // Component JSX here
//   );
// };

// export default MyComponent;
// In this example, the createAsyncThunk function is used to define the fetchData async thunk. This thunk handles the API request and automatically dispatches the appropriate actions (pending, fulfilled, or rejected) based on the Promise's state. The component connects to the Redux store using the useSelector hook to access the fetched data and the useDispatch hook to dispatch the fetchData async thunk.

// Make sure to replace 'your-api-endpoint' with the actual endpoint of your API and 'your-variable-value' with the desired value of the variable you want to pass to the API request.

// User
// if i want to use it in multible component i have to use dispatch in every component or i can solve it in onther way
// ChatGPT
// If you want to use the API request in multiple components, you have a couple of options to avoid duplicating the dispatch logic in each component:

// Create a wrapper component: You can create a higher-level component that encapsulates the API request logic and handles the dispatch. Then, you can use this wrapper component in any other component that needs to make the API request. This way, you only need to dispatch the action in one place.

// javascript
// Copy code
// // DataWrapper.js
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchData } from './slice';

// const DataWrapper = ({ variable }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchData(variable));
//   }, [dispatch, variable]);

//   return null; // or any other JSX you need
// };

// export default DataWrapper;
// In this example, the DataWrapper component dispatches the fetchData async thunk with the specified variable as a prop. You can use this component in multiple places, and it will handle the API request without duplicating the dispatch logic.

// Create a custom hook: You can create a custom hook that encapsulates the dispatch logic and can be used in multiple components. This approach allows you to abstract away the API request logic and provide a reusable hook.

// javascript
// Copy code
// // useDataFetch.js
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchData } from './slice';

// const useDataFetch = (variable) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchData(variable));
//   }, [dispatch, variable]);
// };

// export default useDataFetch;
// You can then use the useDataFetch hook in any component where you need to make the API request:

// javascript
// Copy code
// // MyComponent.js
// import useDataFetch from './useDataFetch';

// const MyComponent = () => {
//   useDataFetch('your-variable-value');

//   // Rest of the component logic here

//   return (
//     // Component JSX here
//   );
// };

// export default MyComponent;
// By using the useDataFetch hook, you can handle the API request in multiple components without duplicating the dispatch logic.

// Both approaches allow you to handle the API request in a centralized location and reuse the logic across multiple components. Choose the option that best fits your application's structure and requirements.

// To access the data fetched from the API after calling useDataFetch('your-variable-value'), you can use the useSelector hook provided by react-redux in your component. Here's an example of how you can access the data:

// javascript
// Copy code
// // MyComponent.js
// import useDataFetch from './useDataFetch';
// import { useSelector } from 'react-redux';

// const MyComponent = () => {
//   useDataFetch('your-variable-value');
//   const data = useSelector((state) => state.data.data); // Assuming your data is stored under the "data" key in your Redux state

//   // Rest of the component logic here

//   return (
//     // Component JSX here
//   );
// };

// export default MyComponent;
// In the example above, the useSelector hook is used to extract the data value from the Redux state. The argument passed to useSelector is a selector function that selects the desired data from the state. In this case, state.data.data is used assuming your fetched data is stored in the data field of your Redux state.

// Make sure to adjust the selector function according to your actual Redux state structure.

// By using useSelector, you can access the fetched data in your component and use it as needed.
