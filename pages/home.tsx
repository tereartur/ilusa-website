import React from 'react';
import HeadMatter from 'components/HeadMatter';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;

    @media (min-width: ${(props) => props.theme.breakpoints['xl']}) {
        flex-direction: row;
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    width: 100%;
    padding: 2rem;

    @media (min-width: ${(props) => props.theme.breakpoints['xl']}) {
        width: 40%;
        height: 100vh;
        padding: 3rem;
    }
`;

const Right = styled.div`
    width: 100%;
    overflow-y: initial;

    @media (min-width: ${(props) => props.theme.breakpoints['xl']}) {
        width: 60%;
        overflow-y: auto;
    }
`;

const Flex = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 1.5rem;

    @media (min-width: ${(props) => props.theme.breakpoints['md']}) {
        flex-direction: column-reverse;
    }

    @media (min-width: ${(props) => props.theme.breakpoints['lg']}) {
        flex-direction: column-reverse;
    }

    @media (min-width: ${(props) => props.theme.breakpoints['xl']}) {
        flex-direction: row;
    }
`;

const ColorHeading = styled.h2`
    line-height: 1;
    font-size: 2rem;
    letter-spacing: -0.025em;
    font-weight: 900;

    color: ${(props) =>
        props.color ? props.theme.colors[props.color] : 'black'};

    @media (min-width: ${(props) => props.theme.breakpoints['lg']}) {
        font-size: 3rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints['xl']}) {
        font-size: 4rem;
    }
`;

const HelloHeading = styled.h1`
    font-size: 2rem;
    line-height: 1;
    letter-spacing: -0.025em;
    font-weight: 900;

    @media (min-width: ${(props) => props.theme.breakpoints['lg']}) {
        font-size: 3rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints['xl']}) {
        font-size: 4rem;
    }
`;

const Ilusa = styled.span`
    color: ${(props) => props.theme.colors['indigo-600']};
`;

const SubHeading = styled.p`
    font-size: 1rem;
    margin-top: 1.25rem;
    max-width: 36rem;
    color: #4a5568;

    @media (min-width: ${(props) => props.theme.breakpoints['lg']}) {
        font-size: 1.15rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints['xl']}) {
        font-size: 1.25rem;
    }
`;

const MailLink = styled.a`
    color: ${(props) => props.theme.colors['indigo-600']};
    background-color: ${(props) => props.theme.colors['indigo-100']};

    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    margin-top: 1.25rem;
    line-height: 1;
    border-radius: 0.5rem;

    -webkit-appearance: button;
    
    text-decoration: none;
`;

const Mascot = styled.div`
    margin-right: 0rem;
    background: white;
    z-index: 10;
    padding: 1rem;
    max-width: 24rem;

    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;

    @media (min-width: ${(props) => props.theme.breakpoints['xl']}) {
        margin-right: -8rem;
        padding: 5rem;
    }
`;

const ProductContainer = styled.div`
    padding: 2rem;
    max-width: 72rem;

    background-color: ${(props) => props.theme.colors[props.bg]};
    
    @media (min-width: ${(props) => props.theme.breakpoints['md']}) {
        padding: 3rem;
    }
`;

const ProductContent = styled.div`
    max-width: 40rem;

    margin-left: auto;
    margin-right: auto;
`;

const ProductImage = styled.img`
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
`;

const ProductTitleContainer = styled.div`
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    
    @media (min-width: ${(props) => props.theme.breakpoints['md']}) {
        margin-top: 2.5rem;
    }
`;

const ProductTitle = styled.h2`
    font-size: 1.25rem;
    letter-spacing: -0.025em;
    line-height: 1;
    font-weight: 900;
    
    @media (min-width: ${(props) => props.theme.breakpoints['md']}) {
        font-size: 1.5rem;
    }
`;

const HomePage: React.FC<any> = () => {
    const title = 'Ilusa';
    const description = 'Kosmeetika';

    return (
        <main>
            <HeadMatter
                title={title}
                description={description}
                image="https://ilusa.ee/static/cards/modern-toolkit-forms.png"
                twitterCard="summary_large_image"
            />
            <Container>
                <Left>
                    <div>
                        <ColorHeading color="orange-300">IMELINE</ColorHeading>
                        <ColorHeading color="green-300">LOODUSLIK</ColorHeading>
                        <ColorHeading color="pink-300">UNUSTAMATU</ColorHeading>
                        <ColorHeading color="purple-300">SINULE</ColorHeading>
                        <ColorHeading color="red-300">ARMASTUSEGA</ColorHeading>
                    </div>
                    <Flex>
                        <div>
                            <HelloHeading>
                                Tsau, mina olen <Ilusa>ILUSA</Ilusa>.
                            </HelloHeading>
                            <SubHeading>
                                Olen 9 aastane tüdruk, kellele meeldib teha
                                teistele neidudele käsitöökosmeetika. Minu
                                kosmeetika on{' '}
                                <span className="font-bold">
                                    100% looduslik
                                </span>{' '}
                                ning hoole ja armastusega Eestis tehtud! Kui
                                sooviksid endale ka neid mõnusaid tooteid, siis
                                võta minuga ühendust ja teen sullegi :)
                            </SubHeading>
                            <MailLink href="mailto:lisandra@ilusa.ee">
                                lisandra [ at ] ilusa.ee
                            </MailLink>
                        </div>
                        <Mascot>
                            <img
                                src="/static/ilusa-mascot.png"
                                alt="Ilusa mascot"
                            />
                        </Mascot>
                    </Flex>
                </Left>
                <Right>
                    <ProductContainer bg="purple-300">
                        <ProductContent>
                            <ProductImage src="/static/esimene.jpg" alt="Tahke huulevõie südamekujulises karbis" />
                            <ProductTitleContainer>
                                <ProductTitle>
                                    Tahke huulevõie südamekujulises karbis
                                </ProductTitle>
                            </ProductTitleContainer>
                        </ProductContent>
                    </ProductContainer>
                    <ProductContainer bg="pink-300">
                        <ProductContent>
                            <ProductImage src="/static/vedel.jpg" alt="Vedel huuleläige" />
                            <ProductTitleContainer>
                                <ProductTitle>Vedel huuleläige</ProductTitle>
                            </ProductTitleContainer>
                        </ProductContent>
                    </ProductContainer>
                    <ProductContainer bg="green-300">
                        <ProductContent>
                            <ProductImage src="/static/tahke-vaike.jpg" alt="Tahke huulevõie" />
                        </ProductContent>
                    </ProductContainer>
                    <ProductContainer bg="yellow-300">
                        <ProductContent>
                            <ProductImage src="/static/tahke-suur.jpg" alt="Tahke suur huulevõie" />
                        </ProductContent>
                    </ProductContainer>
                </Right>
            </Container>
        </main>
    );
};

export default HomePage;
