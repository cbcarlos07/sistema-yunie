import * as os from 'os'

const ifaces = os.networkInterfaces()

const getIpLocal = () => {
    const ips = []
    Object.keys(ifaces).forEach( ifname =>{
        
        ifaces[ifname].forEach( iface =>{
            if( 'IPv4' !== iface.family || iface.internal !== false ){
                //passa se o endereço encontrado for 127.0.01 e não for endereço IPv4
                return
            }
            //if( alias >= 1 ){
                //interface simples para multiplos enderecos IPv4
                //console.log(`${ifname}:${alias}`, iface.address);
            //    ips.push(iface.address)
            //}else{
                //nesta interface so tem IPv4
                //console.log(ifname, iface.address);
                ips.push(iface.address)
            //}
           
        }) 
    })
    const localIp = ips[0]
    return localIp
}

const env = {
    SERVER_PORT: 3001,
    prefix: '/yunie/v1',
    IPLOCAL: getIpLocal(),
}

export default env