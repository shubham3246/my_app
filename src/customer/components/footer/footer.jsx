import { Grid, Typography,Link } from "@mui/material";
import React from "react";
import {Button} from "@mui/material";


const Footer = () => {
    const data = {
        "Company": ["About", "Blogs", "Press", "Jobs", "Partners", "About"],
        "Solutions": ["Marketing", "Analytics", "Commerce", "Insights", "Support"],
        "Documentation": ["Guides", "API Status"],
        "Legal": ["Claim", "Privacy", "Terms"],
    }
    return (
        <div>
            <Grid className="bg-black text-white text-center mt-10"
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}>
                {Object.entries(data).map(([category, items]) => (
                    <Grid key={category} item xs={12} sm={6} md={3}>
                        <Typography className='pb-5' variant='h6'>{category}</Typography>
                        {items.map((item, index) => (
                            <div key={index}>
                                <Button className='pb-5' variant='h6' gutterBottom>{item}</Button>
                            </div>
                        ))}
                    </Grid>
                ))}
                 <Grid container justify="center" className='pt-20'>
      <Grid item xs={12}>
        <Typography variant="body2" component="p" align="center">
          &copy; 2023 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love by Me.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Icons made by{' '}
          <Link href="https://www.freepik.com" color="inherit" underline="always">
            Freepik
          </Link>{' '}
          from{' '}
          <Link href="https://www.flaticon.com/" color="inherit" underline="always">
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>
    </Grid>

            </Grid>

           
        </div>
    )
}
export default Footer;
