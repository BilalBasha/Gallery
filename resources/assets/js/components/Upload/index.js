import React, { Component } from 'react';
import { ProductConsumer } from '../Common/Context';

class Upload extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { authenticate, handleImage ,postImage } = value;
                    return (
                        <div>
                            { authenticate  && 
                            <div>
                                <form method="POST" encType="multipart/form-data" onSubmit={postImage}>
                                    <input type="file" name="profile_pic" onChange={handleImage}/>
                                    <button type="submit"> Submit </button>
                                </form>
                            </div> }
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}

export default Upload;