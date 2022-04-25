import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

export function App() {
    const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModalOpen(){
        setisNewTransactionModalOpen(true);
    }
    function handleCloseNewTransactionModalOpen(){
        setisNewTransactionModalOpen(false);

    }

    return (
        <>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModalOpen}/>
            <Dashboard />
            <NewTransactionModal 
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModalOpen}
            />
            <GlobalStyle />
        </>
    );
}


