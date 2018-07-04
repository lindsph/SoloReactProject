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
            showModal: false
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

    }

    componentWillMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?country=ca&apiKey=${API_KEY}`)
            .then((res) => {
                // console.log(res.data.articles);
                this.setState({
                    news: res.data.articles
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

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
                <Button 
                style={{ border: "2px solid #f5f5f5", color: "white", padding: "12px", borderRadius: "0", fontSize: "15px", fontFamily: "Lora, serif" }} 
                variant="outlined" 
                size="small" 
                aria-haspopup="true"
                onClick={this.handleOpenModal}> 
                Top Headlines 
                </Button>

                <Modal isOpen={this.state.showModal}>
                    <Button
                        color="primary"
                        size="medium"
                        onClick={this.handleCloseModal}>
                        X
                    </Button>
                    <div>NEWS</div>
                </Modal>
            </div>
        )
    }
}

export default News;