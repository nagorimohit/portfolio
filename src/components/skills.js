import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { makeStyles } from '@material-ui/core/styles';
import { SKILLS_TIERS } from '../assets/data';

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
    card: {
        marginBottom: '10px'
    },
    tier: {
        textAlign: 'center',
    },
    skillRow: {
        alignItems: 'center'
    },
    name: { 
    },
    version: {
        textAlign: 'right',
        fontStyle: 'italic',
        fontWeight: 'lighter'
    },
    skillIcon: {
        width: '30px',
        margin: '10px 0'
    }
});

function SKILLS() {
    const classes = useStyles();
    return (
        <Container id="skills" className={classes.root}>
            <h3 className={classes.header}>SKILLS</h3>
            <div className={classes.body}>
                <Row>
                    { 
                        SKILLS_TIERS.map((skilltier) =>
                            <Col sm={6} lg={4} key={skilltier.tier}>
                                <Card className={classes.card}>
                                    <Card.Body>
                                        <Card.Title className={classes.tier}>{ skilltier.tier }</Card.Title>
                                        { 
                                            skilltier.skills.map((skill) => 
                                                <Row className={classes.skillRow} key={skill.name}>
                                                    <Col sm={2}><Image src={require('../assets/icons/' + skill.icon + '.png')} className={classes.skillIcon}/></Col>
                                                    <Col sm={4} className={classes.name}>{skill.name}</Col>
                                                    <Col sm={6} className={classes.version}>{skill.versions}</Col>
                                                </Row>
                                            )
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>)
                    }
                </Row>
            </div>
        </Container>
    );
}

export default SKILLS;
