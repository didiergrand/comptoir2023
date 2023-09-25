import Link from 'next/link';

const QuickLinks = () => {
    return (
            <>    
            <div id="quicklinks" className="is-layout-constrained wp-block-group highlight_section">
            <div className="wp-block-group__inner-container">
                <div className="is-layout-flex wp-container-8 wp-block-columns container">
                <div className="is-layout-flow wp-block-column whitebox">
                    <h3>Accès</h3>

                    <p>
                    Le comptoir de la Veveyse se situe à la Halle triple du Lussy de
                    Châtel-St-Denis.<br /><Link href="/plan-acces">Plan d’accès &gt;</Link>
                    </p>

                    <p>
                    <strong>Transports publics</strong><br />Accéder en toute
                    tranquillité à la manifestation en transports publics.
                    </p>

                    <p>
                    <strong>Parkings</strong><br />Nous vous prions de suivre la
                    signalisation mise en place.<br />Des navettes assurent la liaison
                    entre le parking et la manifestation.
                    </p>
                </div>

                <div className="is-layout-flow wp-block-column whitebox">
                    <h3>Exposants</h3>

                    <p>
                    Plus de 50 entreprises exposeront lors de cette édition 2023.<br /><Link
                        href="/exposants"
                        >Liste des exposants &gt;</Link
                    >
                    </p>
                </div>

                <div className="is-layout-flow wp-block-column whitebox">
                    <h3>Heures d’ouverture</h3>

                    <p>
                    <strong>Stands exposants</strong><br />Mercredi : 11h00 – 21h00<br />Jeudi
                    : 11h00 – 21h00<br />Vendredi : 11h00 – 21h00<br />Samedi : 11h00 – 21h00<br />Dimanche
                    : 11h00 – 18h00
                    </p>

                    <p>
                    <strong>Restauration</strong><br />Mercredi – Samedi: 11h00 – 0h00<br />Dimanche : 11h00 – 21h00
                    </p>

                    <p>
                    <strong>Bars</strong><br />Mercredi – Jeudi: 16h00 – 1h30<br />Vendredi - Samedi: 11h00 –
                    2h30<br />Dimanche: 11h00 – 22h00
                    </p>
                </div>
                </div>
            </div>
            </div>
            </>
    )
}
export default QuickLinks;