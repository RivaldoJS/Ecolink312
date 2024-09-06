import  { useEffect } from 'react';

function Description() {
    useEffect(() => {
        const initMap = () => {
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -23.55052, lng: -46.633308 },
                zoom: 10,
            });
            new google.maps.Marker({
                position: { lat: -23.55052, lng: -46.633308 },
                map: map,
                title: 'Empresa Parceira',
            });
        };
        window.initMap = initMap;
    }, []);

    return (
        <main>
            <h2>Descartar Lixo</h2>
            <form>
                <label>Tipo de Lixo:</label>
                <select>
                    <option value="celular">Celular</option>
                    <option value="computador">Computador</option>
                    <option value="bateria">Bateria</option>
                </select>
                <label>Descrição:</label>
                <textarea></textarea>
                <button type="submit">Enviar</button>
            </form>

            <div id="map" style={{ width: '100%', height: '400px' }}></div>
        </main>
    );
}

export default Description;
