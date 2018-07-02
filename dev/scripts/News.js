import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const API_KEY = "89cc9fbfbed047878d7c577a8b32dbb4";

class News extends React.Component {
    constructor() {
        super();
        this.state = {
            news: [], 
            showModal: false,
            anchorEl: null
        }

        // this.handleNewsButtonClick = this.handleNewsButtonClick.bind(this);
        // this.handleGetNews = this.handleGetNews.bind(this);
        // this.handleMenuClose = this.handleMenuClose.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

    }

    // handleNewsButtonClick(event) {
    //     this.setState({ 
    //         anchorEl: event.currentTarget 
    //     });
    // }

    componentWillMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?country=ca&apiKey=${API_KEY}`)
            .then((res) => {
                console.log(res.data.articles);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // handleMenuClose() {
    //     this.setState({ 
    //         anchorEl: null 
    //     });
    // }

    handleOpenModal() {
        this.setState({
            showModal: true
        })
    }

    handleCloseModal() {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div>
                <Button style={{ border: "3px solid white", margin: "40px 0 0 20px", color: "white", padding: "7px 17px", borderRadius: "0", fontSize: "1.1rem" }} 
                variant="outlined" 
                size="small" 
                // aria-owns={this.state.anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    // onClick={this.handleNewsButtonClick}
                    onClick={this.handleOpenModal}> 
                    Top Headlines </Button>
                {/* <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleMenuClose}
                    onClick={this.handleGetNews}>
                    

                    <MenuItem 
                    onClick={() => this.handleGetNews("bbc-news")}>
                    BBC
                    </MenuItem>
                    <MenuItem onClick={() => this.handleGetNews("cnn")}>CNN</MenuItem>
                    <MenuItem onClick={() => this.handleGetNews("bloomberg")}>Bloomberg</MenuItem>

                </Menu>  */}
                <Modal isOpen={this.state.showModal}>
                    <Button
                        color="primary"
                        size="small"
                        onClick={this.handleCloseModal}>
                        X
                    </Button>
                </Modal>
            </div>
        )
    }
}

export default News;