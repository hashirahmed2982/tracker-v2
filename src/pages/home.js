
import DynamicTable from "../table/DynamicTable"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Topcard from "../components/topcard";
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import {  Unstable_Grid2 as Grid } from '@mui/material';
import { OverviewTotalProfit } from "../components/topcard";
import { CustomersSearch } from "../components/search";
import ResponsiveAppBar from "../components/navbar";



function Home() {

  const [datas, setdatas] = useState([]);
  const [userdata, setuserdata] = useState([]);
  const [catdata, setcatdata] = useState([]);
  const [ready, setready] = useState(false);
  const url = "http://localhost:4000/transaction/transactions/";
    const userurl = "http://localhost:4000/user/users/";
    const caturl = "http://localhost:4000/category/categories/";

 
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setdatas(data);
    })
    .catch((error) => {
      console.log(error);
    });
    getCatData();
    getUserData();
  }, []);

  const getUserData = () => {
	axios.get(userurl).then(({ data }) => {
        setuserdata(data);
        setready(true);
      })
      .catch((error) => {
        console.log(error);
      });
	
};
const getCatData = () => {
	axios.get(caturl).then(({ data }) => {
        setcatdata(data);
        
      })
      .catch((error) => {
        console.log(error);
      });
	
};

  if(datas.length !== 0 ){
    return (
      <><ResponsiveAppBar /><br /><Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >

        <Container maxWidth="xl">
          <Grid

            container
            spacing={2}
            justifyContent={"center"}
          >
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewTotalProfit
                sx={{ height: '100%' }}
                name="Income"
                value="$15000" />
            </Grid>

            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewTotalProfit
                sx={{ height: '100%' }}
                name="Balance"
                value="$5000" />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewTotalProfit
                sx={{ height: '100%' }}
                name="Expense"
                value="$10000" />
            </Grid>
          </Grid>

          <br></br>

          <CustomersSearch />
          <DynamicTable TableData={datas} url={url} />
        </Container></Box></>
    );
  }
  else{
    return(
      "no data found"
    );
  }
}

export default Home