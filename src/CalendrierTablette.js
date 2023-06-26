import React from 'react';
import './CalendrierTablette.css';
import './style.css';

function CalendrierTablette(calendrier,style) {
  return (
    
    <div class={`calendrier-tablette ${calendrier}`} style={style}>
      <div class="calendrier-main">
        <div class="element-mois-en-cours">
          <p class="element-mois-en-cours-texte">19 Juin - 24 Juin</p>
        </div>
        <div class="frame-calendrier-global">
          <div class="frame-calendrier-barre_nav">
            <img class="arrow-up" alt="Flèche vers le haut" href="" />
              <div class="frame-heure">
                <div class="heure">10h</div>
                <div class="heure">11h</div>
                <div class="heure">12h</div>
                <div class="heure">13h</div>
                <div class="heure">14h</div>
                <div class="heure">15h</div>
                <div class="heure">16h</div>
              </div>
              <img class="arrow-up" alt="Flèche vers le bas" href="" />
          </div>
          <div class="frame-calendrier-main-global">
            <div class="frame-calendrier-main-semaine">
                <div class="semaine-wrapper">
                  <div class="semaine-jour">Lundi 19</div>
                </div>
                <div class="semaine-wrapper">
                  <div class="semaine-jour">Mardi 20</div>
                </div>
                <div class="semaine-wrapper">
                  <div class="semaine-jour">Mercredi 21</div>
                </div>
                <div class="semaine-wrapper">
                  <div class="semaine-jour">Jeudi 22</div>
                </div>
                <div class="semaine-wrapper">
                  <div class="semaine-jour">Vendredi 23</div>
                </div>
                <div class="semaine-wrapper">
                  <div class="semaine-jour">Samedi 24</div>
                </div>
                <div class="semaine-wrapper">
                  <div class="semaine-jour">Dimanche 25</div>
                </div>
            </div>
            <div class="frame-calendrier-main-jour">
              <div class="ligne">
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
              </div>
              <div class="ligne">
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
              </div>
              <div class="ligne">
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
              </div>
              <div class="ligne">
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
              </div>
              <div class="ligne">
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
              </div>
              <div class="ligne">
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
              </div>
              <div class="ligne">
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
                <div class="case" />
              </div>
            </div>
          </div>
        </div>
        <div class="over">
          <div class="calendar-week-table">
            <div class="frame-113">
              <div class="frame-114">
                <div class="overlap-group-2">
                  <div class="anniversaire-de-wrapper">
                    <div class="anniversaire-de">Anniversaire de Pierre</div>
                  </div>
                  <img class="rectangle" alt="Rectangle"/>
                </div>
              </div>
            </div>
          </div>
          <div class="calendar-week-table-2">
            <div class="rectangle-wrapper">
              <img class="rectangle-2" alt="Rectangle"  />
            </div>
            <div class="rendez-vous-dr-colin-wrapper">
              <div class="rendez-vous-dr-colin">Rendez-vous Dr Colin (Kiné)</div>
            </div>
          </div>
        </div>
      </div>
  </div>
    );
}

export default CalendrierTablette;
