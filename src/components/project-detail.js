import React, { Component } from "react"
import { Card, Image, CardContent } from "semantic-ui-react"

const ProjectDetail = ({ info }) => {
    return (
        <Card raised href="info.url">
            <Image src={info.image} />
            <Card.Content>
                <Card.Header>{info.title}</Card.Header>
                <Card.Description>{info.shortDescription}</Card.Description>
            </Card.Content>
        </Card>
    )
}
export default ProjectDetail