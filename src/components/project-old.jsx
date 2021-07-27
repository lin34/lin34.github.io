<Card className="project-card">
<Card.Img className="img-project" src={this.props.pictureSource} variant="top" />
<Card.Body>
  <Card.Title className="font-weight-bold">
    {this.props.title}
  </Card.Title>
  <Card.Text>
    <p className="font-italic">
      {this.props.lang}
    </p>
    {this.props.insertLine =="true" && <br></br>} 
    <p className="font-weight-bold">Description:</p>
    {this.props.shortDescription}
    {/* {this.props.longDescription} */}
    
  </Card.Text>
  <Button
    variant="primary"
    href={this.props.link}
  >
    See Project
  </Button>
</Card.Body>
</Card>