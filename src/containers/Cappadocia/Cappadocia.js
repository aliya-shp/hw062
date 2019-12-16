import React, {Component} from 'react';
import './Cappadocia.css';

class Cappadocia extends Component {
    render() {
        return (
            <div className="Cappadocia">
                <h3>Cappadocia</h3>
                <p className="Description">
                    Cappadocia is a historical region in Central Anatolia, largely in the Nevşehir, Kayseri, Kırşehir, Aksaray, and Niğde Provinces in Turkey.
                </p>
                <p className="Description">
                    According to Herodotus, in the time of the Ionian Revolt (499 BC), the Cappadocians were reported as occupying a region from Mount Taurus to the vicinity of the Euxine (Black Sea). Cappadocia, in this sense, was bounded in the south by the chain of the Taurus Mountains that separate it from Cilicia, to the east by the upper Euphrates, to the north by Pontus, and to the west by Lycaonia and eastern Galatia.
                </p>
                <p className="Description">
                    The name, traditionally used in Christian sources throughout history, continues in use as an international tourism concept to define a region of exceptional natural wonders, in particular characterized by fairy chimneys and a unique historical and cultural heritage.
                </p>
                <img src="https://www.enkatravel.com/wp-content/uploads/2018/07/turkey-cappadocia-love-rocks.jpg" alt="Cappadocia"/>
                <img src="https://www.aljazeera.com/mritems/Images/2019/10/8/455009ab51f54773aaf11a3c4fd32d75_8.jpg" alt="Cappadocia"/>
            </div>
        );
    }
}

export default Cappadocia;