import icomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Container } from "./styles";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={icomeImg} alt="Icone de entradas"/>
                </header>
                <strong>R$1000</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Icone de saídas"/>
                </header>
                <strong>- R$500</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Icone de total"/>
                </header>
                <strong>R$500</strong>
            </div>

        </Container>
    );
}