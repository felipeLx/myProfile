import React from 'react';

import classes from './Map.module.css';

const Map = () => {
    const openRioExperience = () => {
        console.log("RJ clicked");
    }
    
    return (
        <div className={classes.Map}>
            <img 
                src="https://lh3.googleusercontent.com/041XGoIuhaJgmSiw9NHZqnh3f5b83cEKF5EW_CnZP-8W-0Yhqaa3FiSlt-KfD8q0Ec-Kk8zVuMXQjRu_vlD9GG4s4ZNRcz9MuVzFJxhiHFM31oBWHlqq1pVnNqFQuH1L9OmDUr08aEhDsE3iPPNGVB3K7Pzls_I8gkcdr8FesfwRBSFiTlbk4M7a111BgauIjziR47fJXf3ZoOcsvGxrT_x_aeT9mL2cNLlECLowV0Ryef6b44nDi7QvJrYC8CNSX-pZSaTwRwt11G6JnXhLlfTf6H3oZBZO-yw1UiK3gZV8R7NEDgJVz5VdPaOA2PiNP5J6DBEZMBJzwweIPTnaxDoua3JPgdFVdH5E1MF0Rq2kpb-3JQn5M6x9RAVtm-UKe6PRQiQ_v9DdKMccAQiyiUDHUWap-4e3T4rOFJqaguQrV01HEfNzhlJ_bLNVgkx-iQbOJmiftAHn3Gqb3yECnF8_KbPtisrMLBvstIoDwFl4wFRR6Q7DznU3r-DnuAHTl6lcxmcI9KdwlfYswAx5vgPO1d6JUh1-SsILcDVuTxKO1UY9VejW_wdjRf7oGd-_dtOC8bJ1IFqO5GkOMgrbWHnXeR9ukS1gl07ZZ7usuiDrMdXdc404qHFULCynhIJmHDfD1aM70XFjezIuHVbNzyLMqSO9H98rmGSnwuP9tBWvsfnXFbfzPks=w718-h637-no" 
                alt="world experience"
                useMap="#map" />
            <map name="map">
                <area alt="rio" shape="rect" coords="460,789,493,816" onClick={openRioExperience} onMouseLeave={console.log('outRio')} />
                <area alt="floripa" shape="rect" coords="403,878,430,901" onMouseOver="{openFloripa}" onMouseLeave="{closeFloripa}" />
                <area alt="spain" shape="rect" coords="798,113,830,140" onMouseOver="{openSpain}" onMouseLeave="{closeSpain}" />
                <area alt="lisbon" shape="rect" coords="723,134,757,160" onMouseOver="{openLisbon}" onMouseLeave="{closeLisbon}" />
            </map>
        </div>
    );
};

export default Map;