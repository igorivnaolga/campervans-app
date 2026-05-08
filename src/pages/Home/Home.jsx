import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cover from '../../components/Cover/Cover';
import { fetchCampervans } from '../../redux/service';
import { selectCamper, selectIsLoading } from '../../redux/selectors';
import { FaHeart } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';
import { TbAutomaticGearbox, TbToolsKitchen2 } from 'react-icons/tb';
import {
  BelowFold,
  BelowInner,
  FeatureCard,
  FeatureGrid,
  Page,
  SectionLead,
  SectionTitle,
  StatBadge,
  StatRow,
} from './Home.styled';

const Home = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCamper);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (campers.length === 0) {
      dispatch(fetchCampervans());
    }
  }, [dispatch, campers.length]);

  const fleetLabel =
    campers.length > 0
      ? `${campers.length} campers in the catalog right now`
      : isLoading
        ? 'Loading the fleet…'
        : 'Open the catalog to see available campers';

  return (
    <Page>
      <Cover />
      <BelowFold aria-label="Getting started">
        <BelowInner>
          <SectionTitle>Plan your road trip</SectionTitle>
          <SectionLead>
            Use filters for location, equipment, and vehicle type. Load more
            results as you browse, then open any card for full specs, photos,
            and reviews.
          </SectionLead>
          <StatRow>
            <StatBadge>{fleetLabel}</StatBadge>
          </StatRow>
          <FeatureGrid>
            <FeatureCard to="/catalog">
              <LuMapPin size={26} aria-hidden />
              <strong>Find by location</strong>
              <span>
                Search Kyiv, Lviv, Odesa, and more — go to the catalog to filter.
              </span>
            </FeatureCard>
            <FeatureCard to="/catalog">
              <TbToolsKitchen2 size={26} aria-hidden />
              <strong>Match your equipment</strong>
              <span>
                AC, automatic, kitchen, TV, shower — toggle what you need before
                you search.
              </span>
            </FeatureCard>
            <FeatureCard to="/catalog">
              <TbAutomaticGearbox size={26} aria-hidden />
              <strong>Pick a body type</strong>
              <span>
                Van, fully integrated, or alcove — narrow the list to the layout
                you want.
              </span>
            </FeatureCard>
            <FeatureCard to="/favorites">
              <FaHeart size={24} aria-hidden />
              <strong>Save favourites</strong>
              <span>
                Tap the heart on any listing; your picks stay after refresh on the
                Favorites page.
              </span>
            </FeatureCard>
          </FeatureGrid>
        </BelowInner>
      </BelowFold>
    </Page>
  );
};
export default Home;
