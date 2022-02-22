import Text from '../../atoms/Text'
export const statusType = {
  loading: 'loading',
  errored: 'errored',
  loaded: 'loaded',
};

export default function ProductList({ status, ...otherProps }) {
  if (status === statusType.loading) {
    return <Text>Is loading</Text>;
  }
  if (status === statusType.errored) {
    return <Text>Falided to load data</Text>;
  }

  return <Text>Is loaded</Text>;
}
