import { useEffect, useContext } from 'react';
import { Web3 } from 'web3';
import "../../cssFiles/navbar.css";
import { Link, useLocation } from 'react-router-dom';
import Web3Context from '../../contexts/ContractContext';

const Index = () => {
    const location = useLocation();
    const { loggedUser, setLoggedUser, walletConnected, setWalletConnected, isAdminLogin, setIsAdminLogin } = useContext(Web3Context);

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', async () => {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3Instance = new Web3(window.ethereum);
                await web3Instance.eth.getAccounts().then((accounts) => {
                    setWalletConnected(false);
                    setIsAdminLogin(false);
                    setLoggedUser(accounts[0]);
                })
                localStorage.clear();
                window.location.reload();
            })
        }
        else {
            window.alert("Can't switch accounts. Try Again!");
        }
    });

    useEffect(() => {
        if (localStorage.getItem('loggedUser') !== null) {
            setLoggedUser(localStorage.getItem('loggedUser'));
            setWalletConnected(true);
        }
        else {
            console.log("Not Logged in!!");
        }
    }, []);

    const handleConnectWallet = async () => {

        if (window.ethereum !== undefined) {
            let user;
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3Instance = new Web3(window.ethereum);
            await web3Instance.eth.getAccounts().then((accounts) => {
                user = accounts[0];
                setLoggedUser(accounts[0]);
                localStorage.setItem("loggedUser", `${accounts[0]}`);
            })

            if (user) {
                const d = new Date();
                let hours = d.getHours();
                const minutes = d.getMinutes().toString().padStart(2, '0');
                const seconds = d.getSeconds().toString().padStart(2, '0');
                const ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12 || 12;
                const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
                const date = `${d.getUTCDate()}/${d.getUTCMonth() + 1}/${d.getUTCFullYear()}`;
                const message = `Sign the message:\n\nThis is only for account verification: \n\nDATE:  ${date} \nTIME:  ${currentTime}`;

                try {
                    await web3Instance.eth.personal.sign(message, user, '').then((e) => {
                        if (e) {
                            localStorage.setItem("message", `${e}`);
                            setWalletConnected(true);
                        }
                    });
                }
                catch (err) {
                    window.alert("Sign the Message to Continue.")
                }
            }
            else {
                window.alert("Install Metamask to continue!!!")
            }
        }
    };


    return (
        <>
            <div className="sticky-header">
                <div>
                    <h1 style={{ color: "white" }}>DIST STORAGE</h1>
                </div>
                <div className='group-container'>
                    {(walletConnected === true) ?
                        <>
                            <div>
                                {isAdminLogin ?
                                    <>
                                        <Link to='/uploadpage' className={`link-style ${location.pathname === '/uploadpage' ? 'active' : ''}`}>
                                            <h2>Upload</h2>
                                        </Link>
                                        <Link to='/users' className={`link-style ${location.pathname === '/users' ? 'active' : ''}`}>
                                            <h2>Users</h2>
                                        </Link>
                                    </> : ('')
                                }
                                <Link to='/filelist' className={`link-style ${location.pathname === '/filelist' ? 'active' : ''}`}>
                                    <h2>Files</h2>
                                </Link>
                            </div>
                            <div className='custom-container'>
                                <p>{loggedUser.substring(0, 16) + '....'}</p>
                            </div>
                        </>
                        :
                        <>
                            <button className='custom-button' onClick={handleConnectWallet}>Connect Wallet</button>
                        </>
                    }
                </div>
            </div>
        </>
    )
}


export default Index;