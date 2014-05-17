function debug_verb(verbosity)
{
  switch(verbosity)
  {
    case 1:
      return 'Critical';
    case 2:
      return 'Error';
    case 3:
      return 'Info';
    default:
      return 'Unknown';
  }

  return 'Unknown';
}

function debug(verbosity, err)
{
  if (debug === undefined || debug === 0) {
    return;
  }

  console.log('[%s]: %s', debug_verb(verbosity), err);
}
