import { useContext, useCallback, useEffect, useState } from 'react';

import _ from 'lodash';

import { AbilityContext } from '@context/ability';
import { UserContext, UserProps } from '@context/user';

import { FeatureCodeEnum } from '@enums/feature';

import {
  AnyAbility,
  PureAbility,
  Subject,
  MongoQuery,
  SubjectRawRule,
  ExtractSubjectType,
} from '@casl/ability';

export type AbilitiesProps =
  | Array<
      SubjectRawRule<
        string,
        ExtractSubjectType<Subject>,
        MongoQuery<{ [x: string]: any }>
      >
    >
  | undefined;

export type CaslAbilitiesProps = {
  abilities: PureAbility;
  featuresArray: string[];
  updateAbilities(rules: AbilitiesProps): void;
};

export const useAuthContext = (): UserProps => useContext(UserContext);

export const useAbilitiesContext = (): AnyAbility => useContext(AbilityContext);

export const useAbilities = (): CaslAbilitiesProps => {
  const [abilities, setAbilities] = useState(new PureAbility());
  const [featuresArray, setFeaturesArray] = useState<string[]>([]);

  const { user } = useAuthContext();

  const updateAbilities = useCallback((rules: AbilitiesProps) => {
    const abilitie = new PureAbility(rules);
    setFeaturesArray(
      _.chain(rules)
        .groupBy('subject')
        .map((_, value) => value as FeatureCodeEnum)
        .value(),
    );
    setAbilities(abilitie);
  }, []);

  useEffect(() => {
    const refreshAbilitiesState = () => {
      if (user) {
        updateAbilities(user.rules);
        return;
      }
      return new PureAbility();
    };
    refreshAbilitiesState();
  }, [updateAbilities, user]);

  return { abilities, updateAbilities, featuresArray };
};
