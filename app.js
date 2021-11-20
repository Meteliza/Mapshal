    //导航
    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );
    
    //放大缩小
    map.addControl(new mapboxgl.NavigationControl());
