import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { makeStyles } from '@material-ui/core/styles';
import { EXPERIENCE } from '../assets/data';

const useStyles = makeStyles({
    root: {
        border: 0,
        maxWidth: '95%',
        marginTop: '70px'
    },
    header: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        borderRadius: 3,
        height: 48,
        padding: '8px 30px 0',
        marginBottom: '-10px',
        fontSize: '24px'
    },
    body: {
        padding: '5px 40px 0'
    },
    experience: {
        marginBottom: '10px'
    },
    title: { },
    subtitle: { 
        fontStyle: 'italic',
        fontWeight: 'lighter'
    },
    duration: {
        textAlign: 'right',
        fontStyle: 'italic',
        fontWeight: 'lighter'
    },
    role: {
        fontWeight: 'lighter'    
    }
});

function EXPERIENCES() {
    const classes = useStyles();
    return (  
        <Container id="experience" className={classes.root}>
            <h3 className={classes.header}>EXPERIENCES</h3>
            <div className={classes.body}>
                { 
                    EXPERIENCE.map((experience) =>
                            <Card key={experience.company} className={classes.experience}>
                                <Card.Body>
                                    <Row>
                                        <Col sm={12} md={8}>
                                            <Card.Title className={classes.title}>{ experience.company }</Card.Title>
                                            <Card.Subtitle className={classes.subtitle}>{ experience.role }</Card.Subtitle>
                                        </Col>
                                        <Col sm={12} md={4} className={classes.duration}>
                                            <Card.Text>{ experience.duration }</Card.Text>
                                        </Col>
                                    </Row>    
                                    <ul>
                                        { 
                                            experience.projects.map((project) => 
                                                <li key={project.name}>
                                                    {project.name}                                    
                                                    <Card.Text className={classes.role}>{project.role}</Card.Text>                                                                            
                                                </li>
                                            )
                                        }
                                    </ul>    
                                </Card.Body>
                            </Card>
                    )
                }
            </div>
        </Container>
    );
}

export default EXPERIENCES;
