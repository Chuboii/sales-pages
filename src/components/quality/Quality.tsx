import { Text, Icon, Container, Wrapper } from "./Quality.style"


const Quality = () => {
  return (
      <Container>
          <Wrapper>
              <Icon className="fa fa-check" aria-hidden="true"></Icon>
              <Text>Dual Whitening Technology</Text>
          </Wrapper>

          <Wrapper>
              <Icon className="fa fa-check" aria-hidden="true"></Icon>
              <Text>Comfortable fit</Text>
          </Wrapper>

          <Wrapper>
              <Icon className="fa fa-check" aria-hidden="true"></Icon>
              <Text>Professional-level results</Text>
          </Wrapper>

          <Wrapper>
              <Icon className="fa fa-check" aria-hidden="true"></Icon>
              <Text>Minimal sensitivity</Text>
          </Wrapper>
    </Container>
  )
}

export default Quality