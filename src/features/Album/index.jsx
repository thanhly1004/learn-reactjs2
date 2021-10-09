import React from 'react';
import AlbumList from './component/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList= [

        {
            id : 1,
            name : 'Nhạc Hoa thịnh hành',
            thumbnailUrl : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/8/3/d/183d008e12cd57e22e84955a851400a5.jpg'
        },
        {
            id : 2,
            name : 'Rap viet',
            thumbnailUrl : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/e/7/9/3e799c64990210f4f0b53efcd33e0acd.jpg'
        },
        {
            id : 3,
            name : 'Trào lưu nhạc hot',
            thumbnailUrl : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/a/5/c/da5c38b76df3d4feedfd50a6456b0c58.jpg'
        },

    ]

    return (
        <div>
            <h2>Zingmp3</h2>
            <AlbumList albumList={albumList}/>

        </div>
    );
}

export default AlbumFeature;